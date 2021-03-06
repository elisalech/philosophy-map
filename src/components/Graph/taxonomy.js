const taxonomyNodes = [
  { parent: 0, label: "philosophy of mind", id: 2183 },
  { parent: 2185, label: "aspects of consciousness", id: 2184 },
  { parent: 2183, label: "consciousness", id: 2185 },
  { parent: 2260, label: "modal logic", id: 2186 },
  { parent: 2185, label: "qualia", id: 2187 },
  { parent: 2185, label: "consciousness and mental content", id: 2188 },
  { parent: 2396, label: "perceptual experience", id: 2189 },
  { parent: 2402, label: "consciousness and physics", id: 2190 },
  { parent: 2402, label: "consciousness and neuroscience", id: 2191 },
  { parent: 2402, label: "consciousness and psychology", id: 2192 },
  { parent: 2183, label: "mental content", id: 2193 },
  { parent: [2375, 2193], label: "internalism and externalism", id: 2194 },
  { parent: 2193, label: "propositional attitudes", id: 2195 },
  { parent: 2193, label: "theories of mental content", id: 2196 },
  { parent: 2183, label: "metaphysics of mind", id: 2197 },
  { parent: 2200, label: "functionalism", id: 2198 },
  { parent: 2200, label: "dualism", id: 2199 },
  { parent: 2197, label: "mind-body problem", id: 2200 },
  { parent: [2364, 2197], label: "personal identity", id: 2201 },
  { parent: 2197, label: "reduction", id: 2202 },
  { parent: 2183, label: "artificial intelligence", id: 2203 },
  { parent: 2203, label: "computation and representation", id: 2204 },
  { parent: 2203, label: "dynamic system", id: 2205 },
  { parent: 2203, label: "computationalism", id: 2206 },
  { parent: 2203, label: "connectionism", id: 2207 },
  { parent: 2203, label: "thinking machine", id: 2208 },
  { parent: 2183, label: "philosophy of psychology", id: 2209 },
  { parent: 2209, label: "aspects of mind", id: 2210 },
  { parent: 2209, label: "folk psychology", id: 2211 },
  { parent: [2209, 2304], label: "philosophy of cognitive science", id: 2212 },
  { parent: 2197, label: "supervenience", id: 2213 },
  { parent: 2197, label: "free will", id: 2214 },
  { parent: 2200, label: "physicalism", id: 2215 },
  { parent: 2197, label: "emergence", id: 2216 },
  { parent: [2436, 2193], label: "intentionality", id: 2217 },
  { parent: 0, label: "philosophy of science and the sciences", id: 2218 },
  { parent: 2302, label: "evolutionary psychology", id: 2219 },
  { parent: 2302, label: "evolution", id: 2220 },
  { parent: 2302, label: "developmental biology", id: 2221 },
  { parent: 2295, label: "cosmology", id: 2222 },
  { parent: 2295, label: "time travel", id: 2223 },
  { parent: 2295, label: "symmetry and invariance", id: 2224 },
  { parent: 2295, label: "statistical mechanics and thermodynamics", id: 2225 },
  { parent: 2295, label: "philosophy of space and time", id: 2226 },
  { parent: 2295, label: "quantum mechanics", id: 2227 },
  { parent: 2295, label: "classical physics", id: 2228 },
  { parent: 2305, label: "scientific methodology", id: 2229 },
  { parent: 2305, label: "epistemology of science", id: 2230 },
  { parent: 0, label: "philosophy of language", id: 2231 },
  { parent: 2231, label: "language and society", id: 2232 },
  { parent: 2231, label: "language learning", id: 2233 },
  { parent: 2231, label: "pragmatics", id: 2234 },
  { parent: 2231, label: "semantics", id: 2235 },
  { parent: 2326, label: "logical form", id: 2236 },
  { parent: 2235, label: "expression and idiom", id: 2237 },
  { parent: 2235, label: "reference and denotation", id: 2238 },
  { parent: 2235, label: "semantic puzzles", id: 2239 },
  { parent: 2235, label: "truth", id: 2240 },
  { parent: 2326, label: "compositionality", id: 2241 },
  { parent: 0, label: "history of philosophy", id: 2242 },
  { parent: 0, label: "ethics", id: 2243 },
  { parent: 0, label: "social and political philosophy", id: 2244 },
  { parent: 0, label: "logic", id: 2245 },
  { parent: 0, label: "feminist philosophy", id: 2246 },
  { parent: 0, label: "aesthetics and philosophy of art", id: 2247 },
  { parent: 2243, label: "metaethics", id: 2248 },
  { parent: 2243, label: "applied ethics", id: 2249 },
  { parent: 2243, label: "history of ethics", id: 2250 },
  { parent: 2243, label: "normative ethics", id: 2251 },
  { parent: 2249, label: "bioethics", id: 2252 },
  { parent: 2249, label: "ethics and art", id: 2253 },
  { parent: 2249, label: "ethics and information technology", id: 2254 },
  { parent: 2245, label: "history of logic", id: 2255 },
  { parent: 2245, label: "inductive logic and decision theory", id: 2256 },
  { parent: 2245, label: "logic and computation", id: 2257 },
  { parent: 2245, label: "logic and language", id: 2258 },
  { parent: 2245, label: "mathematical logic", id: 2259 },
  { parent: 2245, label: "philosophical logic", id: 2260 },
  { parent: 2245, label: "philosophy of logic", id: 2261 },
  { parent: 2247, label: "aesthetics", id: 2262 },
  { parent: 2247, label: "philosophy of art", id: 2263 },
  { parent: 2248, label: "moral epistemology", id: 2264 },
  { parent: 2262, label: "aesthetic judgment", id: 2265 },
  { parent: 2248, label: "metaphysics of morals", id: 2266 },
  { parent: 2262, label: "aesthetic experience", id: 2267 },
  { parent: 2262, label: "aesthetic properties", id: 2268 },
  { parent: 2263, label: "essentialism", id: 2269 },
  { parent: 2263, label: "artistic form", id: 2270 },
  { parent: 2263, label: "artistic value", id: 2271 },
  { parent: 2263, label: "interpretation", id: 2272 },
  { parent: 2263, label: "reception", id: 2273 },
  { parent: 2263, label: "nature of art", id: 2274 },
  { parent: 2263, label: "ontology of art", id: 2275 },
  { parent: 2270, label: "artistic style", id: 2276 },
  { parent: 2246, label: "feminist interventions", id: 2277 },
  { parent: 2246, label: "methods in feminism", id: 2278 },
  { parent: 2248, label: "moral reasoning", id: 2279 },
  { parent: 2244, label: "forms of government", id: 2280 },
  { parent: 2244, label: "political morality", id: 2281 },
  { parent: 2244, label: "social justice", id: 2282 },
  { parent: 2281, label: "political obligation", id: 2283 },
  { parent: 2282, label: "civil rights", id: 2284 },
  { parent: 2282, label: "distributive and economic justice", id: 2285 },
  { parent: 2282, label: "human rights", id: 2286 },
  { parent: 2282, label: "liberalism", id: 2287 },
  { parent: 2244, label: "global justice", id: 2288 },
  { parent: 2244, label: "international ethics", id: 2289 },
  { parent: 2289, label: "war and pacifism", id: 2290 },
  { parent: 2280, label: "communism", id: 2291 },
  { parent: 2280, label: "democracy", id: 2292 },
  { parent: 2305, label: "metaphysics of science", id: 2293 },
  { parent: 2304, label: "philosophy of physics", id: 2295 },
  { parent: 2304, label: "philosophy of chemistry", id: 2296 },
  { parent: 2304, label: "psychology and psychiatry", id: 2297 },
  { parent: 2304, label: "probability and statistics", id: 2298 },
  { parent: 2304, label: "philosophy of medicine", id: 2299 },
  { parent: 2304, label: "philosophy of economics", id: 2300 },
  { parent: 2304, label: "philosophy of computer science", id: 2301 },
  { parent: 2304, label: "philosophy of biology", id: 2302 },
  { parent: 2309, label: "medieval theology", id: 2303 },
  { parent: 2218, label: "philosophies of the particular sciences", id: 2304 },
  { parent: 2218, label: "general philosophy of science", id: 2305 },
  { parent: 2242, label: "ancient philosophy", id: 2306 },
  { parent: 2242, label: "modern philosophy", id: 2307 },
  { parent: 2242, label: "contemporary philosophy", id: 2308 },
  { parent: 2242, label: "medieval philosophy", id: 2309 },
  { parent: 2309, label: "medieval epistemology", id: 2310 },
  { parent: 2309, label: "medieval ethics", id: 2311 },
  { parent: 2309, label: "medieval grammar", id: 2312 },
  { parent: 2309, label: "medieval legal philosophy", id: 2313 },
  { parent: 2309, label: "medieval logic", id: 2314 },
  { parent: 2309, label: "medieval metaphysics", id: 2315 },
  { parent: 2309, label: "medieval political philosophy", id: 2316 },
  { parent: 2309, label: "medieval natural philosophy", id: 2317 },
  { parent: 2314, label: "consequences", id: 2318 },
  { parent: 2314, label: "universals", id: 2319 },
  { parent: 2314, label: "propositions", id: 2320 },
  { parent: 2317, label: "alchemy", id: 2321 },
  { parent: 2317, label: "medieval cosmology", id: 2322 },
  { parent: 2317, label: "medieval philosophy of the soul", id: 2323 },
  { parent: 2317, label: "medieval theories of matter", id: 2324 },
  { parent: 2317, label: "motion and time", id: 2325 },
  { parent: 2231, label: "compositionality and logical form", id: 2326 },
  { parent: 2304, label: "philosophy of sociology", id: 2327 },
  { parent: 2302, label: "function and teleology", id: 2328 },
  { parent: 2302, label: "molecular biology and genetics", id: 2329 },
  { parent: 2302, label: "ecology and conservation", id: 2330 },
  { parent: 2293, label: "mental causation", id: 2331 },
  { parent: 2293, label: "laws of nature", id: 2332 },
  { parent: 2293, label: "unity of science", id: 2333 },
  { parent: 2230, label: "confirmation and induction", id: 2334 },
  { parent: 2230, label: "models and idealization", id: 2335 },
  { parent: 2230, label: "explanation", id: 2336 },
  { parent: 2230, label: "scientific theory", id: 2337 },
  { parent: 2230, label: "operationalism and instrumentalism", id: 2338 },
  { parent: 2230, label: "observation", id: 2339 },
  { parent: 2229, label: "rhetoric of science", id: 2340 },
  { parent: [2256, 2230], label: "decision theory", id: 2341 },
  {
    parent: 2305,
    label: "logical positivism and logical empiricism",
    id: 2342
  },
  { parent: [2359, 2293], label: "realism and anti-realism", id: 2343 },
  { parent: 2229, label: "experimentation", id: 2344 },
  { parent: 2305, label: "science and society", id: 2345 },
  { parent: 2305, label: "science and religion", id: 2346 },
  { parent: 2305, label: "history of science", id: 2347 },
  { parent: 2345, label: "ethics of science", id: 2348 },
  { parent: 2293, label: "reduction and emergence", id: 2349 },
  { parent: 0, label: "metaphysics", id: 2350 },
  { parent: 2350, label: "value", id: 2352 },
  { parent: 2350, label: "space and time", id: 2353 },
  { parent: 2350, label: "property", id: 2354 },
  { parent: [2275, 2358], label: "abstract object", id: 2355 },
  { parent: 2350, label: "modality", id: 2356 },
  { parent: 2350, label: "existence", id: 2357 },
  { parent: 2350, label: "object", id: 2358 },
  { parent: 2350, label: "meta-ontology", id: 2359 },
  { parent: 2350, label: "relation", id: 2360 },
  { parent: [2275, 2358], label: "concrete object", id: 2361 },
  { parent: 2350, label: "person", id: 2364 },
  { parent: 2359, label: "monism and pluralism", id: 2366 },
  { parent: 2359, label: "metaphysics and language", id: 2367 },
  { parent: 2350, label: "fact", id: 2368 },
  { parent: 2360, label: "events", id: 2369 },
  { parent: 2364, label: "mind", id: 2371 },
  { parent: 2350, label: "change", id: 2372 },
  { parent: 2357, label: "arguments for the existence of god", id: 2373 },
  { parent: 0, label: "epistemology", id: 2374 },
  { parent: 2374, label: "justification", id: 2375 },
  { parent: 2374, label: "knowledge and skepticism", id: 2376 },
  { parent: 2374, label: "knowledge sources", id: 2377 },
  { parent: 2374, label: "naturalized epistemology", id: 2378 },
  { parent: 2374, label: "social epistemology", id: 2379 },
  { parent: 2375, label: "a priori and a posteriori", id: 2381 },
  { parent: 2375, label: "rationalism and empiricism", id: 2382 },
  { parent: 2375, label: "reliabilism", id: 2383 },
  { parent: 2375, label: "contextualism", id: 2384 },
  { parent: 2375, label: "foundationalism", id: 2385 },
  { parent: 2375, label: "coherentism", id: 2386 },
  { parent: 2375, label: "holism and indeterminacy", id: 2387 },
  { parent: 2375, label: "bayesianism", id: 2388 },
  { parent: 2375, label: "virtue epistemology", id: 2389 },
  { parent: 2376, label: "knowledge", id: 2390 },
  { parent: 2376, label: "skepticism", id: 2391 },
  { parent: 2377, label: "belief", id: 2392 },
  { parent: 2377, label: "memory", id: 2393 },
  { parent: 2377, label: "introspection", id: 2394 },
  { parent: 2377, label: "testimony", id: 2395 },
  { parent: [2377, 2183], label: "perception", id: 2396 },
  { parent: 2377, label: "inference", id: 2397 },
  { parent: 2200, label: "behaviorism", id: 2398 },
  { parent: 2396, label: "contents of perception", id: 2401 },
  { parent: 2185, label: "consciousness and science", id: 2402 },
  { parent: 2396, label: "sensory modality", id: 2403 },
  { parent: 2260, label: "non-classical logic", id: 2405 },
  { parent: 2260, label: "deontic logic", id: 2406 },
  { parent: 2260, label: "intensional logic", id: 2407 },
  { parent: 2261, label: "logical truth", id: 2408 },
  { parent: 2261, label: "logical consequence", id: 2409 },
  { parent: 2261, label: "informal logic", id: 2410 },
  { parent: 2261, label: "paradox", id: 2411 },
  { parent: 2259, label: "set theory", id: 2412 },
  { parent: 2259, label: "type theory", id: 2413 },
  { parent: 2259, label: "boolean algebra", id: 2414 },
  { parent: 2259, label: "proof theory", id: 2415 },
  { parent: 2257, label: "logic and artificial intelligence", id: 2416 },
  { parent: 2257, label: "computational complexity", id: 2417 },
  { parent: 2256, label: "inductive logic", id: 2418 },
  { parent: 2256, label: "game theory", id: 2419 },
  { parent: 0, label: "chinese philosophy", id: 2420 },
  { parent: 2256, label: "epistemic paradox", id: 2422 },
  { parent: 0, label: "japanese philosophy", id: 2423 },
  { parent: 0, label: "arabic and islamic philosophy", id: 2424 },
  { parent: 0, label: "philosophy of religion", id: 2425 },
  { parent: 0, label: "philosophy of action", id: 2426 },
  { parent: 0, label: "latin american and iberian philosophy", id: 2427 },
  { parent: 0, label: "philosophy of law", id: 2428 },
  { parent: 0, label: "african and african-american philosophy", id: 2429 },
  { parent: 0, label: "judaic philosophy", id: 2430 },
  { parent: 0, label: "continental philosophy", id: 2431 },
  { parent: 2431, label: "existentialism", id: 2432 },
  { parent: 2431, label: "deconstructionism", id: 2433 },
  { parent: 2431, label: "critical theory", id: 2434 },
  { parent: 2431, label: "hermeneutics", id: 2435 },
  { parent: 2431, label: "phenomenology", id: 2436 },
  { parent: 2431, label: "postmodernism", id: 2437 },
  { parent: 2432, label: "nothingness", id: 2438 },
  { parent: 2432, label: "absurdity", id: 2439 },
  { parent: 2425, label: "god or gods", id: 2440 },
  { parent: 2425, label: "epistemology of religion", id: 2442 },
  { parent: 2425, label: "foreknowledge and free will", id: 2443 },
  { parent: 2425, label: "afterlife", id: 2444 },
  { parent: 2425, label: "religion and morality", id: 2445 },
  { parent: 2440, label: "existence of god", id: 2446 },
  { parent: 2440, label: "divine attributes", id: 2447 },
  { parent: 2442, label: "religion and science", id: 2448 },
  { parent: 2442, label: "faith and reason", id: 2449 },
  { parent: 2442, label: "revelation", id: 2450 },
  { parent: 2442, label: "natural theology", id: 2451 },
  { parent: 2425, label: "religion and politics", id: 2452 },
  { parent: 2428, label: "legal reasoning", id: 2453 },
  { parent: 2428, label: "legal concepts", id: 2454 },
  { parent: 2428, label: "law and morality", id: 2455 },
  { parent: 2428, label: "legal authority", id: 2456 },
  { parent: 0, label: "philosophy of mathematics", id: 2457 }
];

const taxonomyEdges = [];
taxonomyNodes.forEach(node => {
  if (node.parent !== 0) {
    if (Array.isArray(node.parent)) {
      for (let par of node.parent) {
        taxonomyEdges.push({
          from: par,
          to: node.id
        });
      }
    } else {
      taxonomyEdges.push({
        to: node.parent,
        from: node.id
      });
    }
  }
});

export { taxonomyNodes, taxonomyEdges };
