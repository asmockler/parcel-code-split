import React from "react";

import { Navigation } from "../../components";

export function Home() {
  const navigation = <Navigation nextUrl="/chapter-1" />;

  return (
    <div>
      {navigation}
      <h1>Little Women</h1>
      {navigation}
    </div>
  );
}
