import React from 'react';

export const codeSplitting = async (firstName, lastName) => {
    const variableCodeSplitting = `You pass through data ${firstName}${lastName}`;
    console.log(variableCodeSplitting);
    return variableCodeSplitting;
};