import React from 'react'

export default function BlogPage() {
  return (

<div>

  <section aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
    <div className="px-4 mx-auto max-w-screen-xl">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <article className="max-w-xs">
          <a href="#">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" alt="Image 1" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#">Our first office</a>
          </h2>
          <p className="mb-4 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
          <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 2 minutes
          </a>
        </article>
        <article className="max-w-xs">
          <a href="#">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" alt="Image 2" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#">Enterprise design tips</a>
          </h2>
          <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
          <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 12 minutes
          </a>
        </article>
        <article className="max-w-xs">
          <a href="#">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" alt="Image 3" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#">We partnered with Google</a>
          </h2>
          <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
          <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 8 minutes
          </a>
        </article>
        <article className="max-w-xs">
          <a href="#">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg" alt="Image 4" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#">Our first project with React</a>
          </h2>
          <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
          <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 4 minutes
          </a>
        </article>
      </div>
    </div>
  </section>
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md sm:text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
        <p className="mx-auto mb-8 max-w-2xl  text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
        <form action="#">
          <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
            <div className="relative w-full">
              <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required />
            </div>
            <div>
              <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
            </div>
          </div>
          <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
        </form>
      </div>
    </div>
  </section>
</div>


  )
}
