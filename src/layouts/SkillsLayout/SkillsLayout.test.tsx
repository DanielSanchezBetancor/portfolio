
import { render } from '@src/test/test-utils';
import SkillsLayout from './SkillsLayout';
import React from 'react';

const setup = () => {
    const refSpy = React.createRef<HTMLDivElement>();
    const context = render(<SkillsLayout skillsRef={refSpy} />);

    return {
        context,
    }
};

describe('Skills Layout Test Suite', () => {
    it('should render the component', () => {
        const utils = setup();

        const skillsSection = utils.context.getByTestId('skills');
        const skillsBeautifier = utils.context.getByTestId('skills-beautifier');

        expect(skillsSection).toBeInTheDocument();
        expect(skillsBeautifier).toBeInTheDocument();
        expect(skillsSection.children).toHaveLength(4);
    })
});

