function calcDeadline(targetDate) {
  const now = Date.now(); //   esama data milisekundemis

  const clock = new Date(); // esamos datos egzempliorius, is jo ↓
  const currentYear = clock.getFullYear(); // suzinome esamus metus
  let currentTargetDate = `${currentYear}-${targetDate}`; // formuojam tikslo datos eilute
  let clockTarget = new Date(currentTargetDate); // ribines datos objektas šiems metams

  let targetInMiliseconds = clockTarget.getTime();
  if (now > targetInMiliseconds) {
    currentTargetDate = `${currentYear + 1}-${targetDate}`; // perkeliam i sekancius metus
    clockTarget = new Date(currentTargetDate); // tikslo datos objektas sekantiems metams
    targetInMiliseconds = clockTarget.getTime();
  }
  const timeLeft = targetInMiliseconds - now;

  let timeLeftInSeconds = Math.round(timeLeft / 1000);
  const days = Math.floor(timeLeftInSeconds / 60 / 60 / 24);

  timeLeftInSeconds -= days * 60 * 60 * 24;
  const hours = Math.floor(timeLeftInSeconds / 60 / 60);

  timeLeftInSeconds -= hours * 60 * 60;
  const minutes = Math.floor(timeLeftInSeconds / 60);

  const seconds = timeLeftInSeconds - minutes * 60;

  return [days, hours, minutes, seconds];
}
export { calcDeadline };
