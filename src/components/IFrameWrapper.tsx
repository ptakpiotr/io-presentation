import React, { Component, PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  src: string;
}

export class IFrameWrapper extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <iframe
        src={this.props.src}
        width={600}
        height={480}
        title="External page"
      />
    );
  }
}
