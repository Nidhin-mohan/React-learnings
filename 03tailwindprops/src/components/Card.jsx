import React from 'react'

export const Card = (props) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src="data:image/jpeg;base64,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"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.name || "default"}</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
}
