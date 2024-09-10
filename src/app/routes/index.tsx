import React, { Suspense } from 'react'
import { Route, RouteObject, Routes } from 'react-router-dom'
import LoadingComponent from '../components/LoadingComponent';
// import { paths } from './path';
import Finger from '../pages/symptons/finger';
import Abdominal from '../pages/symptons/abdominal';
import { paths } from './path';

const Router = () => {
  return (
    <Suspense fallback={<>Loading</>}>
        <Routes>
            {
                paths.map((pathValue: RouteObject ) => (
                    <Route 
                        key={pathValue.path}
                        path={pathValue.path} 
                        element={pathValue.element}
                    >
                        {
                            pathValue?.children?.map((subValue: RouteObject) => (
                                <Route 
                                    key={subValue.path}
                                    path={subValue.path} 
                                    element={
                                        <Suspense fallback={<LoadingComponent />}>
                                            {subValue.element}
                                        </Suspense>
                                    }
                                />
                            ))
                        }
                    </Route>
                ))
            }
        </Routes>
    </Suspense>
  )
}

export default Router