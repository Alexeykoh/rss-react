import { Component } from 'react';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';

export class SearchItem extends Component<{
  data: iPerson;
}> {
  public render() {
    const keys = Object.keys(this.props.data) as Array<keyof iPerson>;
    return (
      <li className="flex flex-col p-2 gap-2 bg-slate-600">
        {keys.slice(0, 4).map(key => (
          <div className=" gap-2 break-words" key={key}>
            <p className="text-lg font-bold">{key}</p>
            <p className="text-balance">
              {this.props.data[key] as keyof iPerson}
            </p>
          </div>
        ))}
      </li>
    );
  }
}
