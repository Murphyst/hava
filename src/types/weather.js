export default class {
  constructor(
    name,
    temp,
    description,
    humidity,
    temp_min,
    temp_max,
    timezone,
    id,
    backgroundImage,
  ) {
    this.name = name;
    this.temp = temp;
    this.description = description;
    this.humidity = humidity;
    this.temp_min = temp_min;
    this.temp_max = temp_max;
    this.timezone = timezone;
    this.id = id;
    this.backgroundImage = backgroundImage;
  }
}
