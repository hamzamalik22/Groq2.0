import React from "react";

const Faqs = () => {
  return (
    <div>
      <section className="dark:bg-zinc-800 dark:text-zinc-200">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="divide-y dark:divide-gray-300">
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">What is Groq AI?</h3>
              <p className="md:pl-0 md:col-span-7">
                Groq AI is an advanced web application that leverages multiple
                AI models to assist with a variety of tasks, from generating
                text to answering questions and more.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                What can I do with Groq AI?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                You can use Groq AI to generate emails, get explanations on
                complex topics, create personal web pages, learn fun facts, and
                much more. Simply enter a prompt, and Groq AI will provide a
                detailed response.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Is there a usage limit?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                While you can use Groq AI for free, there might be limits on the
                number of requests you can make per day. For extended usage,
                consider subscribing to a premium plan.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                What AI models are available on Groq AI?
              </h3>
              <div className="md:pl-0 md:col-span-7">
                Groq AI supports multiple AI models including:
                <ul className="list-disc pl-6">
                  <li>llama3-8b-8192</li>
                  <li>llama3-70b-8192</li>
                  <li>mixtral-8x7b-32768</li>
                  <li>gemma-7b-it</li>
                  <li>whisper-large-v3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
