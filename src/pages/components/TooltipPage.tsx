import { useState } from "react";
import { Tooltip } from "@/components/tooltip";

const TooltipPage = () => {
  const [showCode, setShowCode] = useState(false);

  const usageCode = `<Tooltip text="This tooltip appears on top" position="top">
  <button className="px-6 py-3 rounded-lg bg-blue-600 text-white">
    Top Tooltip
  </button>
</Tooltip>

<Tooltip text="This tooltip appears at bottom" position="bottom">
  <button className="px-6 py-3 rounded-lg bg-green-600 text-white">
    Bottom Tooltip
  </button>
</Tooltip>

<Tooltip text="This tooltip appears on left" position="left">
  <button className="px-6 py-3 rounded-lg bg-purple-600 text-white">
    Left Tooltip
  </button>
</Tooltip>

<Tooltip text="This tooltip appears on right" position="right">
  <button className="px-6 py-3 rounded-lg bg-red-600 text-white">
    Right Tooltip
  </button>
</Tooltip>`;

  return (
    <div className="w-full min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] p-6">
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Tooltip</h1>
        <p className="mt-2 opacity-70">
          A tooltip displays helpful information when you hover over an element.
        </p>
      </div>

      <div className="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden">
        
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-300 dark:border-gray-700">
          <h2 className="text-lg font-semibold">
            Preview
          </h2>

          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--text-color)] text-[var(--text-color)] hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition"
          >
            <span>&lt;/&gt;</span>
            {showCode ? "Hide Code" : "View Code"}
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 py-24 px-6">
          
          <Tooltip text="This tooltip appears on top" position="top">
            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              Top Tooltip
            </button>
          </Tooltip>

          <Tooltip text="This tooltip appears at bottom" position="bottom">
            <button className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition">
              Bottom Tooltip
            </button>
          </Tooltip>

          <Tooltip text="This tooltip appears on left" position="left">
            <button className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
              Left Tooltip
            </button>
          </Tooltip>

          <Tooltip text="This tooltip appears on right" position="right">
            <button className="px-6 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition">
              Right Tooltip
            </button>
          </Tooltip>

        </div>

        {showCode && (
          <div className="border-t border-gray-300 dark:border-gray-700">
            <div className="px-5 py-3 border-b border-gray-300 dark:border-gray-700">
              <h3 className="font-semibold">
                Usage
              </h3>
            </div>

            <pre className="p-6 overflow-x-auto bg-gray-950 text-gray-100 text-sm leading-6">
              <code>{usageCode}</code>
            </pre>
          </div>
        )}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-5">
          API Reference
        </h2>

        <div className="overflow-x-auto border border-gray-300 dark:border-gray-700 rounded-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <th className="px-5 py-4 font-semibold">Prop</th>
                <th className="px-5 py-4 font-semibold">Type</th>
                <th className="px-5 py-4 font-semibold">Default</th>
                <th className="px-5 py-4 font-semibold">Description</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <td className="px-5 py-4 text-[var(--primary-color)]">
                  children
                </td>
                <td className="px-5 py-4">
                  ReactNode
                </td>
                <td className="px-5 py-4">
                  -
                </td>
                <td className="px-5 py-4">
                  Element that triggers the tooltip.
                </td>
              </tr>

              <tr className="border-b border-gray-300 dark:border-gray-700">
                <td className="px-5 py-4 text-[var(--primary-color)]">
                  text
                </td>
                <td className="px-5 py-4">
                  string
                </td>
                <td className="px-5 py-4">
                  -
                </td>
                <td className="px-5 py-4">
                  Text displayed inside the tooltip.
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-[var(--primary-color)]">
                  position
                </td>
                <td className="px-5 py-4">
                  "top" | "bottom" | "left" | "right"
                </td>
                <td className="px-5 py-4">
                  "top"
                </td>
                <td className="px-5 py-4">
                  Controls the position of the tooltip.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default TooltipPage;