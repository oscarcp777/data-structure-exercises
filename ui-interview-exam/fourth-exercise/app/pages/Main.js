import React from 'react'

import Page from 'components/Page'
import Card from 'components/Card'
import FieldsSelector from 'components/FieldsSelector'

export default () => (
  <Page title="You are watching our users' movies preferences...">
    <FieldsSelector />

    {['Carlos', 'Martin', 'Nicolas'].map(user => (
      <Card
        key={user}
        title={user}
      >
        Fields...
      </Card>
    ))}
  </Page>
)
