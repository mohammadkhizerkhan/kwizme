import React from "react";

function QuizCard() {
  return (
    <div className="flex flex-row flex-wrap justify-around gap-4 my-16 mx-24 sm:mx-5 md:mx-14">
      <div class="bg-white rounded-lg shadow-lg w-96">
        <div className="h-64">
          <img
            src="https://wallpapercave.com/dwp1x/wp2581477.jpg"
            alt=""
            class="rounded-t-lg w-full h-full"
          />
        </div>
        <div class="py-4 px-3">
          <h2 class="font-bold mb-1 text-2xl text-purple-800">
            Wanna Become Hokage
          </h2>
          <p class="text-purple-700 mb-4">
            Take this quizz to test yourself{" "}
            <span className="text-xs grey">(5 question)</span>
          </p>
          <button class="animate-bounce inline-block py-2 px-4 bg-primary text-2xl text_color rounded-lg">
            Play
          </button>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg w-96">
        <div className="h-64">
          <img
            src="https://www.flixwatch.co/wp-content/uploads/70300472.jpg.webp"
            alt=""
            class="rounded-t-lg w-full h-full"
          />
        </div>
        <div class="py-4 px-3">
          <h2 class="font-bold mb-1 text-2xl text-purple-800">
            Pass the Hunter Exam
          </h2>
          <p class="text-purple-700 mb-4">
            Take this quizz to test yourself{" "}
            <span className="text-xs grey">(5 question)</span>
          </p>
          <button class="animate-bounce inline-block py-2 px-4 bg-primary text-2xl text_color rounded-lg">
            Play
          </button>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg w-96">
        <div className="h-64">
          <img
            src="https://wallpaperaccess.com/full/2953010.png"
            alt=""
            class="rounded-t-lg w-full h-full"
          />
        </div>
        <div class="py-4 px-3">
          <h2 class="font-bold mb-1 text-2xl text-purple-800">
            Become Hashira
          </h2>
          <p class="text-purple-700 mb-4">
            Take this quizz to test yourself{" "}
            <span className="text-xs grey">(5 question)</span>
          </p>
          <button class="animate-bounce inline-block py-2 px-4 bg-primary text-2xl text_color rounded-lg">
            Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
