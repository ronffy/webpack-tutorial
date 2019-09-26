
import React, { lazy, Suspense } from 'react';
import Loading from '../components/Loading';
import { withErrorBoundary } from '../components/ErrorBoundary';

const InputBox = lazy(() => import('../components/InputBox'));

const Detail = () => {
  return (
    <Suspense fallback={<Loading />}>
      <InputBox />
    </Suspense>
  )
};

export default withErrorBoundary(Detail);
