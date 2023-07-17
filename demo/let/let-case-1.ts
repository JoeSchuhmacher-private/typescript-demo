const getUser = () => ({ isKeyUser: true, isContractor: false });

enum PartnerCompanyTodo {
  RenewCompanyQualifications,
  RenewEmployeeQualifications,
  AddProfessionalResponsibility,
  ActivateEmployeeResponsibility,
  ActivateEmployeeQualifications,
  ActivateCompanyQualifications,
}

const getUserSpecificTodos = (allTodos: PartnerCompanyTodo[]): PartnerCompanyTodo[] => {
  let filteredTodos: PartnerCompanyTodo[] = [];
  const { isKeyUser, isContractor } = getUser();


  const contractorTodoList = new Set<PartnerCompanyTodo>([
    PartnerCompanyTodo.RenewCompanyQualifications,
    PartnerCompanyTodo.RenewEmployeeQualifications,
    PartnerCompanyTodo.AddProfessionalResponsibility
  ]);

  const keyUserTodoList = new Set<PartnerCompanyTodo>([
    PartnerCompanyTodo.ActivateEmployeeResponsibility,
    PartnerCompanyTodo.ActivateEmployeeQualifications,
    PartnerCompanyTodo.ActivateCompanyQualifications,
  ]);

  if (isContractor) {
    filteredTodos = allTodos.filter((t) => contractorTodoList.has(t));
  }

  if (isKeyUser) {
    filteredTodos = allTodos.filter((t) => keyUserTodoList.has(t));
  }
  return filteredTodos;
}