'use strict';

const TekBabblrWords = {
  first: [
    'anomalous', 'ionic', 'ambient', 'astrophysical', 'phased', 'inverted', 'thermal', 'magnatomic', 'atmospheric', 'linear', 'assymetrical', 'trans-warp', 'photonic', 'sonic', 'quantum', 'modulated', 'microscopic', 'unknown', 'giga-watt', 'stupid', 'nucleonic', 'temporal', 'rapid', 'oscillating', 'reciprocating', 'verteron', 'magnetic', 'optical', 'auxiliary'
  ],
  second: [
    'nano-', 'neutrino', 'energy', 'quantum', 'subspace', 'gravimetric', 'space-time', 'e-m', 'dampening', 'tetryon', 'warp', 'wavefront', 'interface', 'particle', 'baryon', 'frequency', 'spatial', 'phase', 'superficial', 'ridiculous', 'flux', 'alternating', 'nadion', 'system', 'artificial', 'pulse', 'plasma', 'data', 'databanks'
  ],
  third: [
    'relay', 'emission', 'phenomenon', 'interference', 'distortion', 'variance', 'harmonic', 'conduit', 'field', 'discriminator', 'array', 'configuration', 'singularity', 'signal', 'matrix', 'nutation', 'disturbance', 'inversion', 'pattern', 'techno-thingy', 'stream', 'domain', 'effect', 'capacitor', 'continuum', 'actuator', 'controller', 'network', 'coupling'
  ]
};

module.exports = {
  generate: function() {
    return `${TekBabblrWords.first[Math.floor(Math.random() * TekBabblrWords.first.length)]} ${TekBabblrWords.second[Math.floor(Math.random() * TekBabblrWords.second.length)]} ${TekBabblrWords.third[Math.floor(Math.random() * TekBabblrWords.third.length)]}`;
  }
};
