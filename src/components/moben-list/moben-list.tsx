import { Component, h, Prop, Watch, State } from '@stencil/core';
import { SomeValue } from './some-value';

@Component({
  tag: 'moben-list',
  styleUrl: 'moben-list.css',
  shadow: true,
})


export class MobenList {
  @Prop() name: string = "";
  @State() arrayData: SomeValue[];

  componentWillLoad() {
    this.parseMyArrayProp(this.name);
  }

  @Watch('name')
  parseMyArrayProp(newValue: string) {
    if (newValue) this.arrayData = JSON.parse(newValue);
  }
  render() {

    return (
      <div class="Wrapper">
        {this.arrayData.map(el => (
          <moben-card>
            <h1>{el.name}</h1>
            <div class="Image-Wrapper"></div>
            <h3>{el.value}</h3>
          </moben-card>
          ))}
        </div>
    );
  }

}
