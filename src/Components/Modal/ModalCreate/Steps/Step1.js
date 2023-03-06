import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../store/helpers/helpersSlice";

export default function Step1() {
	const dispatch = useDispatch();
  return (
    <div>
      <div class="text-left m-[32px]">
        <h2 class="text-[18px] font-textSec pb-[8px]">
          Do you want to create the book?
        </h2>
        <p class="pb-[32px] text-[14px] font-textSec text-text-gray">
          After this you can't change the prompt that you have written, but
          still able to regenerate.
        </p>
        <div class="flex gap-[16px] justify-end">
          <button
            onClick={() => {
              dispatch(openModal(false));
            }}
            class="btn-modal-second flex items-center"
          >
            Cancel
          </button>
          <button
            class="btn flex items-center"
            type="submit"
            onClick={() => {
							dispatch(
                    openModal({
                      open: true,
                      step: 1,
                    })
                  );
            }}
          >
            Yes, Create
          </button>
        </div>
      </div>
    </div>
  );
}
