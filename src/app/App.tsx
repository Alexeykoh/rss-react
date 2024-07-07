import { Component } from 'react';
import ErrorBoundary from '../shared/error-boundary';
import { iPerson } from '../shared/interfaces/start-wars.interface';
import { LocalStorageService } from '../shared/services/local-storage.service.';
import { StartWarsService } from '../shared/services/start-wars.service';
import { SearchForm } from '../widgets/search';
import { SearchResults } from '../widgets/ui/search-results';

class App extends Component<
  Record<string, never>,
  { value: string; peoples: iPerson[]; loader: boolean; error: boolean }
> {
  state = { value: '', error: false, peoples: [] as iPerson[], loader: false };
  searchHistory = new LocalStorageService('searchHistory');
  setLoader(loader: boolean) {
    this.setState({ loader: loader });
  }

  componentDidMount(): void {
    const history = this.searchHistory.get<string>();
    if (history) {
      this.setState({ value: history });
    }
    this.setState({ loader: true });
    StartWarsService.search(history || '', this.setLoader.bind(this)).then(
      data => {
        this.setState({ peoples: data.results });
      }
    );
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
    this.searchHistory.set(event.target.value);
    StartWarsService.search(this.state.value, this.setLoader.bind(this)).then(
      data => this.setState({ peoples: data.results })
    );
  };

  handleSubmit(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    this.searchHistory.set(this.state.value);
    StartWarsService.search(this.state.value, this.setLoader.bind(this)).then(
      data => this.setState({ peoples: data.results })
    );
  }

  render() {
    return (
      <main className=" bg-slate-900 text-white flex flex-col h-screen overflow-hidden">
        <ErrorBoundary>
          <SearchForm
            value={this.state.value}
            handleInput={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
          <SearchResults
            loader={this.state.loader}
            peoples={this.state.peoples}
            error={this.state.error}
          />
          <button
            onClick={() => {
              this.setState({ error: true });
            }}
          >
            catch error
          </button>
        </ErrorBoundary>
      </main>
    );
  }
}

export default App;
