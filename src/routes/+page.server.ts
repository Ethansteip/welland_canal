
export async function load() {

  const response = await fetch("https://canalstatus.com/api/v1/bridges");
  const data = await response.json();
  console.log("Bridge data:", data.bridges);

  return {
      bridgeData: data.bridges
  };
}