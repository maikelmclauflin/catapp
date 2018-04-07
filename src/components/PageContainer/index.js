import React from 'react'
import styled from 'styled-components'

const PageContainer = ({className, children}) => (<div className={className}>
  <div className="content-wrapper">{children}</div>
</div>)

const StyledPageContainer = styled(PageContainer)`
height: 100%;
position: relative;
.content-wrapper {
  overflow: hidden;
}
`
export default StyledPageContainer