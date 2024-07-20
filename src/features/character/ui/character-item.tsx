import { iPerson } from '../../../shared/interfaces/start-wars.interface';
interface iCharacterItemProps {
  data: iPerson | undefined;
}
export function CharacterItem({ data }: iCharacterItemProps) {
  if (!data) return <p>not data</p>;

  const dataArray = Object.entries(data);
  return (
    <div className="w-full flex flex-col">
      {dataArray.map(([name, value], index) => (
        <div key={index} className="flex flex-row gap-4 ">
          <p className="font-bold break-words">{name}</p>
          <p className="break-words">{value}</p>
        </div>
      ))}
    </div>
  );
}
