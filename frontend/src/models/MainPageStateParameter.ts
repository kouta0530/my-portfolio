import SkillParameter from './SkillParameter';
import { WorkParameter } from './WorkParameter';

export interface MainPageStateParameter {
  skills: SkillParameter[];
  skillTypes: string[];
  works: WorkParameter[];
}
