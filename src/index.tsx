import React from 'react'
import ReactDOM from 'react-dom'
import ReposContextProvider from './contexts/ReposContext.context'
import GlobalStyles from './styles/GlobalStyles.styled'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ReposContextProvider>
      <GlobalStyles />
      <App />
    </ReposContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
