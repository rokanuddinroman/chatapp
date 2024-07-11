import React from "react";
import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Button from "./Button";

const moods = [
  {
    name: "Excited",
    value: "excited",
    icon: FireIcon,
    iconColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    name: "Loved",
    value: "loved",
    icon: HeartIcon,
    iconColor: "text-white",
    bgColor: "bg-pink-400",
  },
  {
    name: "Happy",
    value: "happy",
    icon: FaceSmileIcon,
    iconColor: "text-white",
    bgColor: "bg-green-400",
  },
  {
    name: "Sad",
    value: "sad",
    icon: FaceFrownIcon,
    iconColor: "text-white",
    bgColor: "bg-yellow-400",
  },
  {
    name: "Thumbsy",
    value: "thumbsy",
    icon: HandThumbUpIcon,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    name: "I feel nothing",
    value: null,
    icon: XMarkIcon,
    iconColor: "text-gray-400",
    bgColor: "bg-transparent",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ChatMessages = ({ onSubmit, onMoodChange, onAttachFile }) => {
  const [selected, setSelected] = React.useState(moods[5]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    onSubmit(comment, selected);
  };

  const handleMoodChange = (newMood) => {
    setSelected(newMood);
    onMoodChange(newMood);
  };

  return (
    <div className="mt-6 flex gap-x-3">
      <form onSubmit={handleSubmit} className="relative flex-auto">
        <div className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="comment" className="sr-only">
            Add your comment
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={2}
            placeholder="Add your comment..."
            className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
          <div className="flex items-center space-x-5">
            <div className="flex items-center">
              <button
                type="button"
                onClick={onAttachFile}
                className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
              >
                <PaperClipIcon aria-hidden="true" className="h-5 w-5" />
                <span className="sr-only">Attach a file</span>
              </button>
            </div>
            <div className="flex items-center">
              <Listbox value={selected} onChange={handleMoodChange}>
                <Label className="sr-only">Your mood</Label>
                <div className="relative">
                  <ListboxButton className="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                    <span className="flex items-center justify-center">
                      {selected.value === null ? (
                        <span>
                          <FaceSmileIcon
                            aria-hidden="true"
                            className="h-5 w-5 flex-shrink-0"
                          />
                          <span className="sr-only">Add your mood</span>
                        </span>
                      ) : (
                        <span>
                          <span
                            className={classNames(
                              selected.bgColor,
                              "flex h-8 w-8 items-center justify-center rounded-full"
                            )}
                          >
                            <selected.icon
                              aria-hidden="true"
                              className="h-5 w-5 flex-shrink-0 text-white"
                            />
                          </span>
                          <span className="sr-only">{selected.name}</span>
                        </span>
                      )}
                    </span>
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute bottom-10 z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:ml-auto sm:w-64 sm:text-sm"
                  >
                    {moods.map((mood) => (
                      <ListboxOption
                        key={mood.value}
                        value={mood}
                        className="relative cursor-default select-none bg-white px-3 py-2 data-[focus]:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <div
                            className={classNames(
                              mood.bgColor,
                              "flex h-8 w-8 items-center justify-center rounded-full"
                            )}
                          >
                            <mood.icon
                              aria-hidden="true"
                              className={classNames(
                                mood.iconColor,
                                "h-5 w-5 flex-shrink-0"
                              )}
                            />
                          </div>
                          <span className="ml-3 block truncate font-medium">
                            {mood.name}
                          </span>
                        </div>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>
          </div>
          <Button type="submit">Send Message</Button>
        </div>
      </form>
    </div>
  );
};

export default ChatMessages;
