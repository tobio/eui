/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { render } from '../../test/rtl';
import { requiredProps } from '../../test';

import { EuiModal } from './modal';

describe('EuiModal', () => {
  it('renders', () => {
    const { baseElement } = render(
      <EuiModal onClose={() => {}} {...requiredProps}>
        children
      </EuiModal>
    );

    // NOTE: Using baseElement instead of container is required for components that use portals
    expect(baseElement).toMatchSnapshot();
  });
});
