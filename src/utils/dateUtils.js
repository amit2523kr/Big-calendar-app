import { formatDate } from '../data/sampleData';

export const convertSampleDataToEvents = (sampleData) => {
  const events = [];
  
  Object.keys(sampleData).forEach(dateStr => {
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    
    const data = sampleData[dateStr];
    const totalValue = data.reduce((sum, item) => sum + item.value, 0);
    
    events.push({
      id: dateStr,
      title: `Data Points: ${data.length}, Total: ${totalValue}`,
      start: date,
      end: date,
      allDay: true,
      data: data,
    });
  });
  
  return events;
};

export const getDataForDate = (date, sampleData) => {
  const dateStr = formatDate(date);
  console.log('Looking for date:', dateStr, 'Available dates:', Object.keys(sampleData)); // Debug log
  return sampleData[dateStr] || null;
};

export const serializeDate = (date) => {
  return date ? date.toISOString() : null;
};

export const deserializeDate = (dateString) => {
  return dateString ? new Date(dateString) : null;
};