import { Component } from 'react';

export class SearchForm extends Component<{
  value: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}> {
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit}
        className="w-full flex flex-row justify-center duration-150 bg-gray-950 py-2 px-4"
      >
        <input
          placeholder={this.props.value}
          className="placeholder:text-white/50 bg-transparent flex w-full focus:outline-none hover:outline-none active:outline-none"
          onInput={this.props.handleInput}
          type="text"
          value={this.props.value}
        />
        <button onClick={this.props.handleSubmit} type="button">
          search
        </button>
      </form>
    );
  }
}
