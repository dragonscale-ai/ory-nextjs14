"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Session } from "@ory/client";
import { basePath, ory } from "./ory";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [session, setSession] = useState<Session | undefined>();
  const [logoutUrl, setLogoutUrl] = useState<string | undefined>();

  useEffect(() => {
    ory
      .toSession()
      .then(({ data }) => {
        // User has a session!
        setSession(data);
        // Create a logout url
        ory.createBrowserLogoutFlow().then(({ data }) => {
          setLogoutUrl(data.logout_url);
        });
      })
      .catch(() => {
        // Redirect to login page
        return router.push(basePath + "/ui/login");
      });
  }, [router]);

  if (!session) {
    // Still loading
    return null;
  }

  return (
    <main className={styles.main}>
      <h1>Hello! Welcome to the example Nextjs 14 app with Ory.</h1>
      <p>
        If you're seeing this page, you've successfully logged in with Ory! Find
        the log out link below.
      </p>
      {logoutUrl && <Link href={logoutUrl}>Log out</Link>}
    </main>
  );
}
