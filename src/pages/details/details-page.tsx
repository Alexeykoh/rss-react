import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { iPerson } from '../../shared/interfaces/start-wars.interface';
import { StartWarsService } from '../../shared/services/start-wars.service';
import Loader from '../../shared/ui/icons/loader';

export default function DetailsPage() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<null | iPerson>(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const details = searchParams.get('details');
    setLoader(true);
    StartWarsService.getPerson(Number(details)).then(data => {
      setLoader(false);
      if (data) {
        setData(data);
      }
    });
  }, [searchParams]);

  if (loader) return <Loader />;

  if (data) {
    const dataArray = Object.entries(data);
    return (
      <div className="w-full flex flex-col">
        <Link to="/">close</Link>
        {dataArray.map(([name, value], index) => (
          <div key={index} className="flex flex-row gap-4 ">
            <p className="font-bold break-words">{name}</p>
            <p className="break-words">{value}</p>
          </div>
        ))}
      </div>
    );
  }
}
