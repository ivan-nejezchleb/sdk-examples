import * as React from 'react';

export class Test extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <div>Testovaci komponenta</div>
                <input type="button" value="Press" />
            </React.Fragment>
        );
    }
}
