import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  if (process.env.NODE_ENV === 'development') {
    // use jsxDEV here for development only
  }

  return (
    <h1>Hi</h1>
  )
}
