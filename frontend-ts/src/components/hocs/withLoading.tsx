import { Suspense } from 'react'
import { Spin } from 'antd'

export const withLoading = (Component: React.FC) => (props: any) =>
(
    <Suspense
        fallback={
            <div>
                <Spin size="large" />
            </div>
        }
    >
        <Component {...props} />
    </Suspense>
)