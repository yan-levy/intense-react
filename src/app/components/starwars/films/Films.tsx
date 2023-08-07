"use client";

interface FilmsProps {
  films: any[];
  goBack: () => void;
}

function Films(props: FilmsProps) {
  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <button className="button" onClick={props.goBack}>
        Return
      </button>
      <table className="w-3/5 text-xl opacity-70 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-zinc-900">
            <th className="p-2 font-black">Title</th>
            <th className="p-2 font-black">Episode</th>
            <th className="p-2 font-black">Date</th>
          </tr>
        </thead>
        <tbody>
          {props.films.map((f: any, index: number) => (
            <tr
              key={f.title}
              className={`
                text-center
                ${index % 2 === 0 ? "bg-zinc-700" : "bg-zinc-800"}
            `}
            >
              <td className="p-2">{f.title}</td>
              <td className="p-2">{f.episode_id}</td>
              <td className="p-2">
                {new Date(f.release_date).toLocaleDateString("pt-BR")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Films;
