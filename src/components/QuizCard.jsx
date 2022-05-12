import React from "react";

function QuizCard() {
  return (
    <div className="flex flex-row flex-wrap justify-around gap-4 my-16 mx-24 sm:mx-5 md:mx-14">
      <div class="bg-white rounded-lg shadow-lg w-96">
        <img
          src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
          alt=""
          class="rounded-t-lg w-full"
        />
        <div class="py-4 px-3">
          <h2 class="font-bold mb-1 text-2xl text-purple-800">
            Card with an image
          </h2>
          <p class="text-purple-700 mb-4">
           Take this quizz to test yourself <span className="text-xs grey">(5 question)</span>
          </p>
          <button class="animate-bounce inline-block py-2 px-4 bg-primary text-2xl text_color rounded-lg">Play</button>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg w-96">
        <img
          src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
          alt=""
          class="rounded-t-lg w-full"
        />
        <div class="py-4 px-3">
          <h2 class="font-bold mb-1 text-2xl text-purple-800">
            Card with an image
          </h2>
          <p class="text-purple-700 mb-4">
           Take this quizz to test yourself <span className="text-xs grey">(5 question)</span>
          </p>
          <button class="animate-bounce inline-block py-2 px-4 bg-primary text-2xl text_color rounded-lg">Play</button>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg w-96">
        <img
          src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
          alt=""
          class="rounded-t-lg w-full"
        />
        <div class="py-4 px-3">
          <h2 class="font-bold mb-1 text-2xl text-purple-800">
            Card with an image
          </h2>
          <p class="text-purple-700 mb-4">
           Take this quizz to test yourself <span className="text-xs grey">(5 question)</span>
          </p>
          <button class="animate-bounce inline-block py-2 px-4 bg-primary text-2xl text_color rounded-lg">Play</button>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
