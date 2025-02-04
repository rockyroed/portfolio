export const Lines = () => {
  const lines = new Array(40).fill("-");

  return (
    <div className="flex overflow-hidden w-3/4">
    <div className="flex">
      <ul className="flex animate-infinite-scroll">
        {lines.map((line, index) => (
          <li className="font-bold text-9xl" key={index}>
            {line}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex" aria-hidden="true">
      <ul className="flex animate-infinite-scroll">
        {lines.map((line, index) => (
          <li className="font-bold text-9xl" key={index}>
            {line}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};
