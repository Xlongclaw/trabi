"use client";

import {
  CalendarDays,
  MapPin,
  Minus,
  Plus,
  Search,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { type ReactNode, useState } from "react";

import { HStack, VStack } from "@/components/layout";
import { Typography } from "@/components/ui";
import { cn } from "@/utils";

const LOCATIONS = [
  "Spiti Valley",
  "Manali",
  "Goa",
  "Rishikesh",
  "Ladakh",
  "Kerala",
];

const MIN_TRAVELERS = 1;
const MAX_TRAVELERS = 20;

type ActiveField = "location" | "dates" | "travelers" | null;

export default function SearchBox() {
  const router = useRouter();

  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [activeField, setActiveField] = useState<ActiveField>(null);

  const toggleField = (field: Exclude<ActiveField, null>) => {
    setActiveField((current) => (current === field ? null : field));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    const trimmedLocation = location.trim();

    if (trimmedLocation) {
      params.set("q", trimmedLocation);
      params.set("location", trimmedLocation);
    }

    if (startDate) {
      params.set("startDate", startDate);
    }

    if (endDate) {
      params.set("endDate", endDate);
    }

    params.set("travelers", String(travelers));

    router.push(`/travel/search?${params.toString()}`);
  };

  const handleLocationKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const filteredLocations = LOCATIONS.filter((item) =>
    item.toLowerCase().includes(location.trim().toLowerCase()),
  );

  return (
    <VStack
      spacing="sm"
      className={cn(
        "z-30 mx-10 mt-3.5",
        "min-w-[calc(100%-30px)]",
        "rounded-[22px] bg-white p-2.5",
        "shadow-[0_20px_70px_rgba(0,0,0,0.10)]",
        "ring-1 ring-black/[0.04]",
        "sm:max-w-[850px] sm:rounded-[18px] sm:p-1.5",
        "lg:min-w-240 lg:max-w-[1050px] lg:mt-0 ",
        "lg:rounded-t-none ",
      )}
    >
      <div
        className={cn(
          "grid w-full gap-2",
          "sm:grid-cols-2",
          "md:grid-cols-[1.3fr_1fr_1fr_auto]",
        )}
      >
        {/* WHERE */}
        <div className="relative">
          <SearchField
            icon={<MapPin />}
            label="Where"
            onClick={() => setActiveField("location")}
          >
            <input
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onFocus={() => setActiveField("location")}
              onKeyDown={handleLocationKeyDown}
              placeholder="Where do you want to go?"
              className={cn(
                "mt-0.5 w-full truncate",
                "bg-transparent",
                "text-xs font-medium",
                "outline-none",
                "placeholder:text-black/45",
                "sm:text-sm",
              )}
            />
          </SearchField>

          {activeField === "location" && (
            <Dropdown className="left-0 right-0 top-[68px]">
              <VStack spacing="xs">
                {filteredLocations.length > 0 ? (
                  filteredLocations.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setLocation(item);
                        setActiveField(null);
                      }}
                      className={cn(
                        "flex w-full items-center gap-3",
                        "rounded-xl px-3 py-1",
                        "text-left transition",
                        "hover:bg-lime-50",
                      )}
                    >
                      <HStack
                        align="center"
                        justify="center"
                        className="size-6 shrink-0 rounded-full bg-[#e8f9c7]"
                      >
                        <MapPin className="size-3" />
                      </HStack>

                      <Typography
                        variant="body-sm"
                        className="font-medium"
                      >
                        {item}
                      </Typography>
                    </button>
                  ))
                ) : (
                  <Typography
                    variant="body-sm"
                    className="px-3 py-2 text-black/45"
                  >
                    No destinations found.
                  </Typography>
                )}
              </VStack>
            </Dropdown>
          )}
        </div>

        {/* WHEN */}
        <div className="relative">
          <SearchField
            icon={<CalendarDays />}
            label="When"
            onClick={() => toggleField("dates")}
          >
            <Typography
              variant="body-sm"
              className="mt-0.5 truncate font-medium"
            >
              {getDateLabel(startDate, endDate)}
            </Typography>
          </SearchField>

          {activeField === "dates" && (
            <Dropdown className="left-0 right-0 top-[68px] sm:w-[320px]">
              <VStack spacing="md">
                <Typography
                  variant="body-sm"
                  className="font-semibold"
                >
                  Choose your dates
                </Typography>

                <VStack spacing="sm">
                  <DateField
                    label="Start date"
                    value={startDate}
                    min={today()}
                    onChange={(value) => {
                      setStartDate(value);

                      if (endDate && value > endDate) {
                        setEndDate("");
                      }
                    }}
                  />

                  <DateField
                    label="End date"
                    value={endDate}
                    min={startDate || today()}
                    disabled={!startDate}
                    onChange={setEndDate}
                  />
                </VStack>

                <DoneButton onClick={() => setActiveField(null)} />
              </VStack>
            </Dropdown>
          )}
        </div>

        {/* TRAVELERS */}
        <div className="relative">
          <SearchField
            icon={<Users />}
            label="Travelers"
            onClick={() => toggleField("travelers")}
          >
            <Typography
              variant="body-sm"
              className="mt-0.5 truncate font-medium"
            >
              {travelers}{" "}
              {travelers === 1 ? "traveler" : "travelers"}
            </Typography>
          </SearchField>

          {activeField === "travelers" && (
            <Dropdown className="right-0 top-[68px] w-[260px]">
              <VStack spacing="md">
                <HStack align="center" justify="between">
                  <VStack spacing="none" align="start">
                    <Typography
                      variant="body-sm"
                      className="font-semibold"
                    >
                      Travelers
                    </Typography>

                    <Typography
                      variant="body-sm"
                      className="text-black/40"
                    >
                      Who&apos;s joining you?
                    </Typography>
                  </VStack>

                  <HStack align="center" spacing="sm">
                    <CounterButton
                      icon={<Minus />}
                      disabled={travelers <= MIN_TRAVELERS}
                      onClick={() =>
                        setTravelers((value) =>
                          Math.max(MIN_TRAVELERS, value - 1),
                        )
                      }
                    />

                    <Typography
                      variant="body-sm"
                      className="w-5 text-center font-semibold"
                    >
                      {travelers}
                    </Typography>

                    <CounterButton
                      icon={<Plus />}
                      disabled={travelers >= MAX_TRAVELERS}
                      onClick={() =>
                        setTravelers((value) =>
                          Math.min(MAX_TRAVELERS, value + 1),
                        )
                      }
                    />
                  </HStack>
                </HStack>

                <DoneButton onClick={() => setActiveField(null)} />
              </VStack>
            </Dropdown>
          )}
        </div>

        {/* SEARCH */}
        <button
          type="button"
          onClick={handleSearch}
          className={cn(
            "flex items-center justify-center gap-2",
            "rounded-2xl",
            "bg-[#111111]",
            "px-6 py-4",
            "text-sm font-semibold text-white",
            "transition",
            "hover:bg-black/80",
            "active:scale-[0.98]",
            "sm:px-7",
          )}
        >
          <Search className="size-4" />

          <Typography
            as="span"
            variant="body-sm"
            className="font-semibold text-white"
          >
            Search Journeys
          </Typography>
        </button>
      </div>
    </VStack>
  );
}

/* -------------------------------------------------------------------------- */
/* Search Field                                                               */
/* -------------------------------------------------------------------------- */

interface SearchFieldProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
  onClick?: () => void;
}

function SearchField({
  icon,
  label,
  children,
  onClick,
}: SearchFieldProps) {
  const content = (
    <>
      <HStack
        align="center"
        justify="center"
        className="shrink-0 text-black/50 [&>svg]:size-5"
      >
        {icon}
      </HStack>

      <VStack
        spacing="none"
        align="start"
        className="min-w-0 flex-1"
      >
        <Typography
          variant="body-sm"
          className={cn(
            "text-[10px]",
            "font-semibold uppercase",
            "tracking-wider text-black/60",
          )}
        >
          {label}
        </Typography>

        {children}
      </VStack>
    </>
  );

  const className = cn(
    "flex w-full items-center gap-3",
    "rounded-2xl bg-lime-50",
    "px-4 py-3",
    "sm:px-5 sm:py-4",
  );

  if (!onClick) {
    return <HStack className={className}>{content}</HStack>;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(className, "text-left")}
    >
      {content}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/* Dropdown                                                                   */
/* -------------------------------------------------------------------------- */

interface DropdownProps {
  children: ReactNode;
  className?: string;
}

function Dropdown({ children, className }: DropdownProps) {
  return (
    <div
      className={cn(
        "absolute z-50",
        "rounded-2xl",
        "border border-black/[0.06]",
        "bg-white p-4",
        "shadow-[0_20px_50px_rgba(0,0,0,0.12)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Date Field                                                                 */
/* -------------------------------------------------------------------------- */

interface DateFieldProps {
  label: string;
  value: string;
  min?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

function DateField({
  label,
  value,
  min,
  disabled,
  onChange,
}: DateFieldProps) {
  return (
    <label className="block">
      <Typography
        as="span"
        variant="body-sm"
        className="mb-1.5 block font-medium text-black/45"
      >
        {label}
      </Typography>

      <input
        type="date"
        value={value}
        min={min}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "w-full rounded-xl",
          "border border-black/[0.08]",
          "bg-lime-50",
          "px-3 py-3",
          "text-sm",
          "outline-none",
          "focus:border-black/20",
          "disabled:cursor-not-allowed",
          "disabled:opacity-40",
        )}
      />
    </label>
  );
}

/* -------------------------------------------------------------------------- */
/* Counter Button                                                             */
/* -------------------------------------------------------------------------- */

interface CounterButtonProps {
  icon: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

function CounterButton({
  icon,
  disabled,
  onClick,
}: CounterButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex size-9 items-center justify-center",
        "rounded-full",
        "border border-black/[0.1]",
        "transition",
        "hover:bg-black/[0.04]",
        "disabled:cursor-not-allowed",
        "disabled:opacity-30",
      )}
    >
      {icon}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/* Done Button                                                                */
/* -------------------------------------------------------------------------- */

function DoneButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full rounded-xl",
        "bg-theme-dark",
        "px-4 py-3",
        "text-sm font-semibold text-white",
        "transition",
        "hover:bg-theme-green",
      )}
    >
      Done
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function today() {
  return new Date().toISOString().split("T")[0];
}

function formatDate(value: string) {
  if (!value) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
  }).format(new Date(`${value}T00:00:00`));
}

function getDateLabel(startDate: string, endDate: string) {
  if (!startDate) return "Choose dates";

  if (!endDate) {
    return formatDate(startDate);
  }

  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
}
