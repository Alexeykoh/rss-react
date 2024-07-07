import { Component } from 'react';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';
import { Loader } from '../../../shared/ui/icons/loader';
import { SearchItem } from './search-item';

export class SearchResults extends Component<{
  loader: boolean;
  peoples: iPerson[];
  error: boolean;
}> {
  public render() {
    if (this.props.error) throw new Error('Error');
    if (this.props.loader) return <Loader />;
    return (
      <section
        className={
          (!this.props.loader ? 'opacity-100' : 'opacity-0') +
          ' no-scrollbar flex flex-col gap-2 duration-150 w-full h-screen overflow-y-scroll'
        }
      >
        {this.props.peoples
          ? this.props.peoples.map((peoples, index) => (
              <SearchItem data={peoples} key={index} />
            ))
          : null}
      </section>
    );
  }
}
