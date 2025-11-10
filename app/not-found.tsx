// app/not-found.tsx
import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/sq"); // change to "/" if you want main homepage
  return null;
}
