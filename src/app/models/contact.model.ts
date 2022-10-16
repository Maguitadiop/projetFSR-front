import {Address} from './address.model'
import {ContactGroup} from './contactGroup.model'
import {PhoneNumber} from './phoneNumber.model'

export class Contact {
  idContact?: number;
  firstName?: string;
  lastName?: string;
  email?: string
  address?: Address;
  contactGroups?: Set<ContactGroup>;
  phones?: Set<PhoneNumber>;

}
