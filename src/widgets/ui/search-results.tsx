import { Component } from 'react';
import { iPerson } from '../../shared/interfaces/start-wars.interface';
import { Loader } from '../../shared/ui/icons/loader';

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
          (!this.props.loader ? 'opacity-100' : 'opacity-0') + ' duration-150 '
        }
      >
        {this.props.peoples
          ? this.props.peoples.map((peoples, index) => (
              <div key={index}>{peoples.name}</div>
            ))
          : null}
      </section>
    );
  }
}
