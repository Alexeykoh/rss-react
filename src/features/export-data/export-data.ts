import { iPerson } from '../../shared/interfaces/start-wars.interface';

function exportData(data: iPerson[]) {
  const csvData = [
    'name,gender,height,mass,homeworld,films',
    ...data.map(item => {
      const { name, gender, height, mass, homeworld, films } = item;
      return `${name},${gender},${height},${mass},${homeworld},${films.join('; ')}`;
    })
  ].join('\n');
  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, `${data.length}-characters.csv`);
}

function saveAs(blob: Blob, fileName: string) {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default exportData;
