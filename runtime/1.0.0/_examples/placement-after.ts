// main/placement.ts — after
async start(options) {
  const bundle = await verifyBundle(/* … */);
  const placement = resolvePlacement();

  if (placement.mode === 'isolated') {
    requireSessionEndpoints(placement);
    return this.startIsolated(options, bundle, placement);
  }

  return this.startLocal(options, bundle);
}
