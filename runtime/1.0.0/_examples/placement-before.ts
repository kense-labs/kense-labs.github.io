// main/placement.ts — before
async start(options) {
  const bundle = await verifyBundle(/* … */);
  return this.startLocal(options, bundle);
}
