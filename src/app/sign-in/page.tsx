import { Spotlight } from '../_components/Spotlight'
import { Banner } from './_components/Banner'
import { SignInForm } from './_components/SignInForm'

export default function Example() {
    return (
        <>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="fuchsia"
            />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <Banner />
                <SignInForm />
            </div>
        </>
    )
}
