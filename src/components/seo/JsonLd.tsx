import React from 'react';
import type { Graph, Thing, WithContext } from 'schema-dts';

type JsonLdInput =
  | Graph
  | WithContext<Thing>
  | Record<string, unknown>
  | Array<Record<string, unknown>>;

/**
 * Renders schema.org JSON-LD inside a native `<script>` element following
 * Next.js 16 guidance, escaping `<` characters to prevent script injection.
 */
export function JsonLd({ data }: { data: JsonLdInput }) {
  const payload = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: payload }}
    />
  );
}
