import { Component } from 'react';
import ErrorBoundary from '../../shared/error-boundary';
import { iPerson } from '../../shared/interfaces/start-wars.interface';
import { LocalStorageService } from '../../shared/services/local-storage.service.';
import { StartWarsService } from '../../shared/services/start-wars.service';
import { SearchForm } from './ui/search-bar';
import { SearchResults } from './ui/search-results';

class Search extends Component<
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
      <section className="md:w-96 w-64 flex flex-col gap-2">
        <ErrorBoundary>
          <SearchForm
            value={this.state.value}
            handleInput={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
          <button
            onClick={() => {
              this.setState({ error: true });
            }}
          >
            catch error
          </button>
          <SearchResults
            loader={this.state.loader}
            peoples={this.state.peoples}
            error={this.state.error}
          />
        </ErrorBoundary>
      </section>
    );
  }
}

export default Search;
