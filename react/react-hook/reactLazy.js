import React, { Suspense } from 'react'

const Home = React.lazy(() => import('./screens/home'))
const User = React.lazy(() => import('./screens/user'))

function App() {
  return (
    <ThemeProvider>
      <GitHubContext.Provider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense
            fallback={
              <LoadingMessagePage>Loading Application</LoadingMessagePage>
            }
          >
            <Router>
              <Home path="/" />
              <User path="/:username" />
            </Router>
          </Suspense>
        </ErrorBoundary>
      </GitHubContext.Provider>
    </ThemeProvider>
  )
}