using MachineManagement.API.Models;

namespace MachineManagement.API.Services;

public interface IMachineService
{
    List<Machine> GetAllMachines(string? status);

    Machine? GetMachineById(Guid id);

    Machine CreateMachine(Machine newMachine);

    void UpdateMachineTelemetry(Guid id, string location, string status);
}