"use client";

import { SearchManuFacturerProps } from "@/app/types";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  manufacturer,
  setManuFacturer,
}: SearchManuFacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers // Show all manufacturers if no query
      : manufacturers.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManuFacturer}>
        <div className="relative w-full">
          {/* Combobox Button */}
          <ComboboxButton className="absolute top-[14px] left-[10px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </ComboboxButton>

          {/* Combobox Input */}
          <ComboboxInput
            className="search-manufacturer__input pl-10"
            placeholder="Search manufacturer"
            displayValue={(selectedManufacturer: string) =>
              selectedManufacturer || ""
            }
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* Combobox Options */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions className="search-manufacturer__options">
              {filteredManufacturers.map((item) => (
                <ComboboxOption
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
