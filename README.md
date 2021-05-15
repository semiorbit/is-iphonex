# Semiorbit isIphoneX

Detect if device is an iphone(X, or later) with a notch.

## Install

```shell
npm i @semiorbit/is-iphonex
```

## Usage

```javascript
import React from 'react';
import isIphoneX from '@semiorbit/is-iphonex';

const Test = props => {

    return (
        <div className={isPhoneX ? styles.ContainerX : styles.Container}>
            My Componenet
        </div>
    );
    
};

export default Test;
```