"use client";

import { useMemo, useState } from "react";
import { Check, RotateCcw } from "lucide-react";

import type { LivingListItem } from "@/lib/data/livingList";

type Props = {
  items: LivingListItem[];
};

export function LivingListClient({ items }: Props) {
  const [completedIds, setCompletedIds] = useState<Set<number>>(
    () =>
      new Set(items.filter((item) => item.completed).map((item) => item.id)),
  );
  const [filter, setFilter] = useState<"all" | "remaining" | "completed">(
    "all",
  );

  const completedCount = completedIds.size;

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (filter === "completed") return completedIds.has(item.id);
      if (filter === "remaining") return !completedIds.has(item.id);
      return true;
    });
  }, [items, completedIds, filter]);

  function toggleItem(id: number) {
    setCompletedIds((previous) => {
      const next = new Set(previous);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }

  function resetList() {
    setCompletedIds(
      new Set(items.filter((item) => item.completed).map((item) => item.id)),
    );
    setFilter("all");
  }

  return (
    <div>
      <div className="rounded-3xl bg-ocean p-6 text-white sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-seafoam">
              A life in progress
            </p>
            <p className="mt-3 text-4xl font-bold tabular-nums">
              {completedCount}
              <span className="text-white/50"> / {items.length}</span>
            </p>
            <p className="mt-2 text-sm text-white/75">
              Experiences completed along the way.
            </p>
          </div>

          <div className="w-full sm:max-w-48">
            <div className="h-2 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-seafoam transition-all duration-300"
                style={{
                  width: `${items.length ? (completedCount / items.length) * 100 : 0}%`,
                }}
              />
            </div>
            <p className="mt-2 text-right text-xs text-white/70">
              {Math.round((completedCount / items.length) * 100)}% complete
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {(
            [
              ["all", "All items"],
              ["remaining", "Still to do"],
              ["completed", "Completed"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === value
                  ? "bg-ocean text-white"
                  : "border border-border bg-white text-muted hover:text-ocean"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={resetList}
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-coral"
        >
          <RotateCcw size={15} />
          Reset demo
        </button>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {filteredItems.map((item) => {
          const completed = completedIds.has(item.id);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-pressed={completed}
              className={`flex items-start gap-4 rounded-2xl border p-5 text-left transition-all ${
                completed
                  ? "border-emerald/20 bg-seafoam-light"
                  : "border-border bg-white hover:border-teal/50 hover:shadow-sm"
              }`}
            >
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                  completed
                    ? "border-emerald bg-emerald text-white"
                    : "border-border bg-paper text-transparent"
                }`}
              >
                <Check size={14} />
              </span>

              <span className="min-w-0 flex-1">
                <span
                  className={`block text-sm font-semibold leading-6 ${
                    completed ? "text-emerald" : "text-ocean"
                  }`}
                >
                  {item.title}
                </span>

                {item.note && (
                  <span className="mt-2 block text-xs leading-5 text-muted">
                    {item.note}
                  </span>
                )}

                <span
                  className={`mt-3 block text-[10px] font-bold uppercase tracking-[0.15em] ${
                    completed ? "text-emerald" : "text-muted"
                  }`}
                >
                  {completed ? "Completed" : "On the list"}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <p className="mt-8 rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted">
          No items in this view.
        </p>
      )}

      <p className="mt-6 text-xs leading-6 text-muted">
        Interactive demo: your changes are held in this page's temporary state
        and will reset when you reload the page.
      </p>
    </div>
  );
}
