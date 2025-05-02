export async function getCountries() {
  const req = await fetch("https://restcountries.com/v3.1/all");
  if (req.status === 200) {
    const res = await req.json();
    return res;
  } else {
    throw new Error("Xatolik bo'ldi, ko'rmisan?");
  }
}
